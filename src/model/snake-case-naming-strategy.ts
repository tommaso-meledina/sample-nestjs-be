import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
import { snakeCase } from 'typeorm/util/StringUtils';

export class SnakeCaseNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  tableName(className: string, customName: string): string {
    const rawName = customName ?? className;
    return snakeCase(rawName).toUpperCase();
  }

    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return snakeCase([...embeddedPrefixes, customName ?? propertyName].join('_')).toLowerCase();
  }

    relationName(propertyName: string): string {
    return snakeCase(propertyName).toLowerCase();
  }

    joinColumnName(relationName: string, referencedColumnName: string): string {
    return snakeCase(`${relationName}_${referencedColumnName}`).toLowerCase();
  }

    joinTableName(firstTableName: string, secondTableName: string, firstPropertyName: string, secondPropertyName: string): string {
    return snakeCase(`${firstTableName}_${secondTableName}`).toUpperCase();
  }

    joinTableColumnName(tableName: string, propertyName: string, columnName?: string): string {
    return snakeCase(`${tableName}_${columnName ?? propertyName}`).toLowerCase();
  }

    classTableInheritanceParentColumnName(parentTableName: string, parentTableIdPropertyName: string): string {
    return snakeCase(`${parentTableName}_${parentTableIdPropertyName}`).toLowerCase();
  }
}
