interface UserInput {
  message: string;
}

interface Response {
  message: string;
}

class ChatBot {
  private responses: { [key: string]: Response };

  constructor() {
    this.responses = {
      "hello": { message: "Hi! How can I assist you today?" },
      "hi": { message: "Hey! What's on your mind?" },
      "default": { message: "I didn't quite understand that. Can you rephrase?" }
    };
  }

  processInput(input: UserInput): Response {
    const message = input.message.toLowerCase();
    if (this.responses[message]) {
      return this.responses[message];
    } else {
      return this.responses["default"];
    }
  }
}

class ChatSimulator {
  private chatBot: ChatBot;

  constructor() {
    this.chatBot = new ChatBot();
  }

  startConversation(): void {
    console.log("Welcome to the chat simulator!");

    while (true) {
      const userInput = prompt("You: ") as UserInput;
      const response = this.chatBot.processInput(userInput);
      console.log(`Bot: ${response.message}`);
    }
  }
}

const simulator = new ChatSimulator();
simulator.startConversation();