import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ChatComponent {
  isHidden = true

  toggleChat() {
    this.isHidden = !this.isHidden
  }

  messages: { text: string; sender: 'user' | 'bot' }[] = []
  userInput: string = ''

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' })
      this.userInput = ''
      this.generateBotResponse()
    }
  }

  generateBotResponse() {
    setTimeout(() => {
      const botMessage = '¡Hola! ¿Cómo puedo ayudarte hoy?'
      this.messages.push({ text: botMessage, sender: 'bot' })
    }, 500) // Simula un retraso en la respuesta del bot
  }
}
