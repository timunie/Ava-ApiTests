# Avalonia.Data Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Data_AssignBindingAttribute">AssignBindingAttribute</a></td>
<td>Signifies that a binding can be assigned to a property.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_BindingChainException">BindingChainException</a></td>
<td>An exception returned through <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> signaling that a requested binding expression could not be evaluated because of an error in one of the links of the binding chain.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_BindingNotification">BindingNotification</a></td>
<td>Represents a binding notification that can be a valid binding value, or a binding or data validation error.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_BindingOperations">BindingOperations</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_DataValidationException">DataValidationException</a></td>
<td>Exception, which wrap validation errors.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_DoNothingType">DoNothingType</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_IndexerDescriptor">IndexerDescriptor</a></td>
<td>Holds a description of a binding for <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>'s [] operator.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a></td>
<td>Holds the result of calling <a href="M_Avalonia_Data_IBinding_Initiate">Initiate(AvaloniaObject, AvaloniaProperty, Object, Boolean)</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_OptionalExtensions">OptionalExtensions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_TemplateBinding">TemplateBinding</a></td>
<td>A XAML binding to a property on a control's templated parent.</td>
</tr>
</table>

## Structures
<table>
<tr>
<td><a href="T_Avalonia_Data_BindingValue_1">BindingValue(T)</a></td>
<td>A value passed into a binding.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_Optional_1">Optional(T)</a></td>
<td>An optional typed value.</td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Data_IBinding">IBinding</a></td>
<td>Holds a binding that can be applied to a property on an object.<br /><Tag type="is-warning">Not client implementable.</Tag></td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Data_BindingErrorType">BindingErrorType</a></td>
<td>Defines the types of binding errors for a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_BindingMode">BindingMode</a></td>
<td>Defines possible binding modes.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_BindingPriority">BindingPriority</a></td>
<td>The priority of a value or binding.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_BindingValueType">BindingValueType</a></td>
<td>Describes the type of a <a href="T_Avalonia_Data_BindingValue_1">BindingValue(T)</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Data_UpdateSourceTrigger">UpdateSourceTrigger</a></td>
<td>Describes the timing of binding source updates.</td>
</tr>
</table>
