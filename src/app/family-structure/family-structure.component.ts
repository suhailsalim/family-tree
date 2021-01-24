import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FAMILY_MEMBERS_MAP, SLIDER_VALUES_MAP, FAMILY_MEMBER_OPTIONS, MAXIMUM_MEMBERS_MAP, MINIMUM_MEMBERS_MAP } from '../helpers';
import { totalMembersValidator } from '../validators';

@Component({
  selector: 'app-family-structure',
  templateUrl: './family-structure.component.html',
  styleUrls: ['./family-structure.component.scss']
})
export class FamilyStructureComponent implements OnInit {
  familyForm: FormGroup;

  FAMILY_MEMBERS_MAP = FAMILY_MEMBERS_MAP;

  FAMILY_MEMBER_OPTIONS = FAMILY_MEMBER_OPTIONS;

  TOTAL_MEMBERS_OPTIONS = [{
    value: 1,
    label: 1
  }];

  constructor(fb: FormBuilder) {
    this.familyForm = fb.group({
      familyMembers: 1,
      totalActualMembers: 1,
      memberGroups: fb.array(
        FAMILY_MEMBER_OPTIONS.map(familyMemberOption => {
          return fb.group({
            name: familyMemberOption.value,
            label: familyMemberOption.label,
            isSelected: false,
            noOfMembers: 0
          });
        }))
    }, {
      validators: [totalMembersValidator]
    });
  }

  ngOnInit(): void {
    this.familyForm.get('familyMembers').valueChanges.subscribe((familyMembers: number) => {
      const start = MINIMUM_MEMBERS_MAP[familyMembers];
      this.familyForm.get('totalActualMembers').setValue(start);
      const end = MAXIMUM_MEMBERS_MAP[familyMembers];
      this.TOTAL_MEMBERS_OPTIONS = [];
      for (let iterator = start; iterator <= end; iterator++) {
        this.TOTAL_MEMBERS_OPTIONS.push({
          value: iterator,
          label: iterator
        });
      }
    });
  }

  displayWith(sliderValue: number): string {
    return SLIDER_VALUES_MAP[Number(sliderValue)];
  }

  get familyMembers(): number {
    return this.familyForm.get('familyMembers').value;
  }

  get totalActualMembers(): number {
    return this.familyForm.get('totalActualMembers').value;
  }

  get memberGroups(): any {
    return this.familyForm.get('totalActualMembers').value;
  }
}
