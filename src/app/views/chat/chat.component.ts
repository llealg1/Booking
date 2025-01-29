import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class ChatComponent  {
  isHidden = true;
  isWaiting = false;

  messages: { text: string; sender: 'user' | 'bot' | 'waiting' }[] = [];
  userInput: string = '';

  @ViewChild('chatMessages') private chatMessagesContainer!: ElementRef;

  constructor(private chatNaviService: ChatNaviService) {}

  toggleChat() {
    this.isHidden = !this.isHidden;
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.scrollToBottom();
      this.messages.push({ text: this.userInput, sender: 'user' });
      const userMessage = this.userInput;
      this.userInput = '';

      // Mostrar spinner de espera
      this.isWaiting = true;
      this.messages.push({ text: '', sender: 'waiting' });

      this.scrollToBottom();

      this.chatNaviService.postChatNavi(userMessage).subscribe(response => {
        // Eliminar spinner de espera
        this.messages = this.messages.filter(message => message.sender !== 'waiting');
        this.isWaiting = false;

        const botMessage = response.response;
        this.messages.push({ text: botMessage, sender: 'bot' });

        this.scrollToBottom();
      });
    }
  }

  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatMessagesContainer.nativeElement.scrollTo(0, this.chatMessagesContainer.nativeElement.scrollHeight);
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
}
