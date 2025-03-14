import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-promotions-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotions-detail.component.html',
  styleUrls: ['./promotions-detail.component.scss']
})
export class PromotionsDetailComponent implements OnInit {
  id: string | null = null;
  safeUrl: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://v2.app.moguplatform.com/trips/${this.id}`);
    }
  }
}
