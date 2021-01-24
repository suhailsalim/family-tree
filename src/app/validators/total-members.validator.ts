import { FormGroup, ValidationErrors } from '@angular/forms';

export function totalMembersValidator(formGroup: FormGroup): ValidationErrors | null {
  const formValue = formGroup.value;
  const { totalActualMembers, memberGroups } = formValue;
  const filteredMembers: any[] = memberGroups.filter(memberGroup => memberGroup.isSelected).map(memberGroup => memberGroup.noOfMembers);
  if (!filteredMembers || filteredMembers.length === 0) {
    return null;
  }
  const totalAddedMembers: number = filteredMembers.reduce((total, current) => total += current);
  if (totalAddedMembers > totalActualMembers) {
    return {
      invalidTotalMembers: 'Number of Added Members is more than the actual total members in the family. Please check again.'
    };
  }
  return null;
}
