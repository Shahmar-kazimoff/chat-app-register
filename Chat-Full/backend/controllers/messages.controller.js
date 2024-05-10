import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (request, response) => {
    try {
        const { message } = request.body;
        const { receiverId } = request.params;
        const senderId = request.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = await Message.create({ senderId, receiverId, message });

        if (!newMessage) {
            return response.status(404).send({ error: "Could not create new message" });
        }

        conversation.messages.push(newMessage._id);
        await conversation.save()

        response.status(201).send(newMessage);
    } catch (error) {
        console.log(`Error in sendMessage controller: ${error}`);
        response.status(500).send({ error: 'Internal server error' })
    }
};

export const getMessages = async (request, response) => {
    try {
        const { receiverId } = request.params;
        const senderId = request.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate('messages');

        if (!conversation) {
            return response.status(200).send([]);
        }

        const messages = conversation.messages;

        response.status(200).send(messages)

    } catch (error) {
        console.log("Error in getMessages:", error);
        response.status(404).send({ error: "Internal Server Error" });
    }
};
