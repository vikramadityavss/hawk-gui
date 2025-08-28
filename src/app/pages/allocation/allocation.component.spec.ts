import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-allocation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // Material Modules
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent {
  selectedDate = new Date();

  displayedColumns: string[] = [
    'sfxEntity',
    'entityType',
    'carExemption',
    'entityTotalNAV',
    'optimalCAR',
    'allocation',
    'sfxToClose',
    'manualOverlayAmt',
    'bufferPercent',
    'bufferAmt',
    'hedgedPosition',
    'availableAmtForHedging'
  ];

  dataSource = Array.from({ length: 10 }, (_, i) => ({
    sfxEntity: `Entity ${String.fromCharCode(65 + i)}`,
    entityType: i % 2 === 0 ? 'Branch' : 'Subsidiary',
    carExemption: i % 3 === 0,
    entityTotalNAV: 1000000 + i * 10000,
    optimalCAR: 300000 + i * 5000,
    allocation: 250000 + i * 4000,
    sfxToClose: 20000 + i * 1000,
    manualOverlayAmt: 5000 + i * 500,
    bufferPercent: 5 + i,
    bufferAmt: 15000 + i * 1200,
    hedgedPosition: 230000 + i * 3000,
    availableAmtForHedging: 20000 + i * 2000
  }));

  refreshAllocation(): void {
    console.log('Refresh triggered for allocation table');
  }
}
