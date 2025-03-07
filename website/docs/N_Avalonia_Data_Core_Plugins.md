# Avalonia.Data.Core.Plugins Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_BindingPlugins">BindingPlugins</a></td>
<td>Holds a registry of plugins used for bindings.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_DataAnnotationsValidationPlugin">DataAnnotationsValidationPlugin</a></td>
<td>Validates properties on that have <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.dataannotations.validationattribute" target="_blank" rel="noopener noreferrer">ValidationAttribute</a>s.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_DataValidationBase">DataValidationBase</a></td>
<td>Base class for data validators.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_ExceptionValidationPlugin">ExceptionValidationPlugin</a></td>
<td>Validates properties that report errors by throwing exceptions.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_IndeiValidationPlugin">IndeiValidationPlugin</a></td>
<td>Validates properties on objects that implement <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.inotifydataerrorinfo" target="_blank" rel="noopener noreferrer">INotifyDataErrorInfo</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_PropertyAccessorBase">PropertyAccessorBase</a></td>
<td>Defines a default base implementation for a <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_PropertyError">PropertyError</a></td>
<td>An <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a> that represents an error.</td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_IDataValidationPlugin">IDataValidationPlugin</a></td>
<td>Defines how data validation is observed by an BindingExpression.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a></td>
<td>Defines an accessor to a property on an object returned by a <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessorPlugin">IPropertyAccessorPlugin</a></td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessorPlugin">IPropertyAccessorPlugin</a></td>
<td>Defines how a member is read, written and observed by a binding.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Core_Plugins_IStreamPlugin">IStreamPlugin</a></td>
<td>Defines a plugin that handles the '^' stream binding operator.</td>
</tr>
</table>