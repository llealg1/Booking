import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatNaviService } from '@/app/core/services/chat-navi.service';

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ChatComponent implements AfterViewChecked {
  isHidden = true;
  isWaiting = false;
  shouldScroll = false;

  messages: { text: string; sender: 'user' | 'bot' | 'waiting' }[] = [];
  userInput: string = '';

  @ViewChild('chatMessages') private chatMessagesContainer!: ElementRef;

  constructor(private chatNaviService: ChatNaviService) {}

  toggleChat() {
    this.isHidden = !this.isHidden;
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      const userMessage = this.userInput;
      this.userInput = '';

      // Mostrar icono de avión cargando
      this.isWaiting = true;
      this.messages.push({ text: '', sender: 'waiting' });

      this.shouldScroll = true;
      this.scrollToBottom();

      this.chatNaviService.postChatNavi(userMessage).subscribe(response => {
        // Eliminar icono de avión cargando
        this.messages = this.messages.filter(message => message.sender !== 'waiting');
        this.isWaiting = false;

        const botMessage = response.response;
        this.messages.push({ text: botMessage, sender: 'bot' });

        this.shouldScroll = true;
        this.scrollToBottom();
      });
    }
  }

  ngAfterViewChecked() {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  private scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
      }, 0);
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
}
