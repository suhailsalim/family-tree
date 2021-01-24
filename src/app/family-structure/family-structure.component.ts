import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { familyMembersMap, sliderValuesMap } from '../helpers';

@Component({
  selector: 'app-family-structure',
  templateUrl: './family-structure.component.html',
  styleUrls: ['./family-structure.component.scss']
})
export class FamilyStructureComponent implements OnInit {
  familyForm: FormGroup;

  familyMembersMap = familyMembersMap;

  constructor(fb: FormBuilder) {
    this.familyForm = fb.group({
      familyMembers: 1
    });
  }

  ngOnInit(): void {
  }

  displayWith(sliderValue: number): string {
    return sliderValuesMap[Number(sliderValue)];
  }

  get familyMembers(): number {
    return this.familyForm.get('familyMembers').value;
  }

}
