export function getKeyboardType(inputType: string): Record<string, string> {
  switch (inputType) {
    case 'email': {
      return { inputType: 'email', keyboardType: 'email-address' };
    }
    case 'tel': {
      return { inputType: 'tel', keyboardType: 'phone-pad' };
    }
    case 'money':
    case 'numeric':
    case 'decimal': {
      return { inputType: 'decimal', keyboardType: 'decimal-pad' };
    }
    case 'url': {
      return { inputType: 'url', keyboardType: 'url' };
    }
    case 'none':
    case 'text':
    case 'search':
    default: {
      return { inputType: 'text', keyboardType: 'default' };
    }
  }
}

export function getCustomPattern(inputType: string): string | undefined {
  switch (inputType) {
    case 'email': {
      return '/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/';
    }
    case 'tel': {
      return '/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/';
    }
    default: {
      return;
    }
  }
}

export function handleValidation(
  value: any,
  pattern: string | string[] | undefined
): boolean {
  if (typeof pattern === 'string') {
    const condition = new RegExp(pattern, 'g');
    return condition.test(value);
  }

  if (typeof pattern === 'object' && pattern?.length) {
    const conditions = pattern?.map((rule) => new RegExp(rule, 'g'));
    return conditions.every((condition) => condition.test(value));
  }
  return true;
}
