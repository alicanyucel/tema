import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';

export type BillingCycle = 'monthly' | 'quarterly' | 'biannual' | 'annual';

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  color: string;
  accentGradient: string;
  icon: string;
  prices: Record<BillingCycle, number>;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  enterprise?: boolean;
  userLimit: string;
  storageLimit: string;
  apiCalls: string;
}

export interface PricingFeature {
  label: string;
  included: boolean;
  highlight?: boolean;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatRippleModule, MatTooltipModule, MatChipsModule],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.scss'
})
export class PricingPageComponent {
  readonly billingCycle = signal<BillingCycle>('monthly');

  readonly cycles: { key: BillingCycle; label: string; discount: string | null }[] = [
    { key: 'monthly',   label: 'Aylık',   discount: null       },
    { key: 'quarterly', label: '3 Aylık', discount: '%10 İndirim' },
    { key: 'biannual',  label: '6 Aylık', discount: '%20 İndirim' },
    { key: 'annual',    label: 'Yıllık',  discount: '%35 İndirim' },
  ];

  readonly plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Küçük ekipler ve yeni başlayanlar için',
      color: '#6c63ff',
      accentGradient: 'linear-gradient(135deg, #6c63ff 0%, #a78bfa 100%)',
      icon: 'rocket_launch',
      userLimit: '5 Kullanıcı',
      storageLimit: '10 GB',
      apiCalls: '50K / ay',
      prices: {
        monthly:   990,
        quarterly: 2673,   // 990*3 * 0.90
        biannual:  4752,   // 990*6 * 0.80
        annual:    7722,   // 990*12 * 0.65
      },
      cta: 'Ücretsiz Dene',
      features: [
        { label: 'Finans & Muhasebe', included: true },
        { label: 'Stok Yönetimi', included: true },
        { label: 'Temel Raporlar', included: true },
        { label: 'E-Fatura Entegrasyonu', included: true },
        { label: 'Mobil Uygulama', included: true },
        { label: 'CRM Modülü', included: false },
        { label: 'Üretim Planlama', included: false },
        { label: 'API Erişimi', included: false },
        { label: 'Öncelikli Destek', included: false },
        { label: 'Özel Entegrasyon', included: false },
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'Büyüyen işletmeler için tam kapsamlı ERP',
      badge: 'En Popüler',
      color: '#06b6d4',
      accentGradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
      icon: 'auto_awesome',
      userLimit: '25 Kullanıcı',
      storageLimit: '100 GB',
      apiCalls: '500K / ay',
      popular: true,
      prices: {
        monthly:   2990,
        quarterly: 8073,   // 2990*3 * 0.90
        biannual:  14352,  // 2990*6 * 0.80
        annual:    23322,  // 2990*12 * 0.65
      },
      cta: '14 Gün Ücretsiz',
      features: [
        { label: 'Finans & Muhasebe', included: true },
        { label: 'Stok Yönetimi', included: true },
        { label: 'Gelişmiş Raporlar & BI', included: true, highlight: true },
        { label: 'E-Fatura Entegrasyonu', included: true },
        { label: 'Mobil Uygulama', included: true },
        { label: 'CRM Modülü', included: true, highlight: true },
        { label: 'Üretim Planlama', included: true, highlight: true },
        { label: 'API Erişimi', included: true, highlight: true },
        { label: 'Öncelikli Destek', included: false },
        { label: 'Özel Entegrasyon', included: false },
      ]
    },
    {
      id: 'business',
      name: 'Business',
      subtitle: 'Orta ölçekli şirketler için güçlü altyapı',
      badge: 'Çok Satan',
      color: '#f59e0b',
      accentGradient: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)',
      icon: 'business',
      userLimit: '100 Kullanıcı',
      storageLimit: '500 GB',
      apiCalls: '2M / ay',
      prices: {
        monthly:   6990,
        quarterly: 18873,  // 6990*3 * 0.90
        biannual:  33552,  // 6990*6 * 0.80
        annual:    54522,  // 6990*12 * 0.65
      },
      cta: '14 Gün Ücretsiz',
      features: [
        { label: 'Finans & Muhasebe', included: true },
        { label: 'Stok Yönetimi', included: true },
        { label: 'Gelişmiş Raporlar & BI', included: true, highlight: true },
        { label: 'E-Fatura Entegrasyonu', included: true },
        { label: 'Mobil Uygulama', included: true },
        { label: 'CRM Modülü', included: true, highlight: true },
        { label: 'Üretim Planlama', included: true, highlight: true },
        { label: 'API Erişimi', included: true, highlight: true },
        { label: 'Öncelikli Destek', included: true, highlight: true },
        { label: 'Özel Entegrasyon', included: false },
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'Büyük kurumlar için sınırsız güç',
      color: '#10b981',
      accentGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      icon: 'domain',
      userLimit: 'Sınırsız',
      storageLimit: 'Sınırsız',
      apiCalls: 'Sınırsız',
      enterprise: true,
      prices: {
        monthly:   14990,
        quarterly: 40473,  // 14990*3 * 0.90
        biannual:  71952,  // 14990*6 * 0.80
        annual:    116922, // 14990*12 * 0.65
      },
      cta: 'Teklif Al',
      features: [
        { label: 'Finans & Muhasebe', included: true },
        { label: 'Stok Yönetimi', included: true },
        { label: 'Gelişmiş Raporlar & BI', included: true, highlight: true },
        { label: 'E-Fatura Entegrasyonu', included: true },
        { label: 'Mobil Uygulama', included: true },
        { label: 'CRM Modülü', included: true, highlight: true },
        { label: 'Üretim Planlama', included: true, highlight: true },
        { label: 'API Erişimi', included: true, highlight: true },
        { label: 'Öncelikli Destek 7/24', included: true, highlight: true },
        { label: 'Özel Entegrasyon & Danışmanlık', included: true, highlight: true },
      ]
    }
  ];

  readonly faqItems = [
    {
      q: 'Ücretsiz deneme sonrası otomatik ücretlendirme olur mu?',
      a: 'Hayır. Deneme süresi bitiminde kredi kartı bilgisi girmedikçe herhangi bir ücretlendirme yapılmaz.'
    },
    {
      q: 'Plan değiştirmek mümkün mü?',
      a: 'Evet, dilediğiniz zaman üst veya alt plana geçebilirsiniz. Geçiş anında kalan günler oranlanarak hesaplanır.'
    },
    {
      q: 'Fatura kesimi nasıl yapılıyor?',
      a: 'Seçtiğiniz faturalandırma dönemine göre aylık, 3 aylık, 6 aylık veya yıllık e-fatura gönderilir.'
    },
    {
      q: 'Veri güvenliği nasıl sağlanıyor?',
      a: 'TLS 1.3 şifrelemesi, ISO 27001 sertifikalı veri merkezleri ve KVKK uyumlu altyapı kullanılmaktadır.'
    },
  ];

  readonly openFaq = signal<number | null>(null);

  readonly currentPrice = computed(() => {
    return (plan: PricingPlan) => plan.prices[this.billingCycle()];
  });

  readonly monthlyEquivalent = computed(() => {
    return (plan: PricingPlan) => {
      const cycle = this.billingCycle();
      const total = plan.prices[cycle];
      const months = cycle === 'monthly' ? 1 : cycle === 'quarterly' ? 3 : cycle === 'biannual' ? 6 : 12;
      return Math.round(total / months);
    };
  });

  readonly savingsAmount = computed(() => {
    return (plan: PricingPlan) => {
      const cycle = this.billingCycle();
      if (cycle === 'monthly') return 0;
      const months = cycle === 'quarterly' ? 3 : cycle === 'biannual' ? 6 : 12;
      const fullPrice = plan.prices['monthly'] * months;
      return fullPrice - plan.prices[cycle];
    };
  });

  setBillingCycle(cycle: BillingCycle) {
    this.billingCycle.set(cycle);
  }

  toggleFaq(i: number) {
    this.openFaq.update(v => v === i ? null : i);
  }

  formatPrice(val: number): string {
    return val.toLocaleString('tr-TR');
  }

  getDiscountLabel(cycle: BillingCycle): string {
    return this.cycles.find(c => c.key === cycle)?.discount ?? '';
  }
}
