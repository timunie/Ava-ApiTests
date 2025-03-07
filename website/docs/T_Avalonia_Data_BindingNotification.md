# BindingNotification Class


Represents a binding notification that can be a valid binding value, or a binding or data validation error.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class BindingNotification
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class BindingNotification
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type BindingNotification = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingNotification.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  BindingNotification</td></tr>
</table>

This class is very similar to <a href="T_Avalonia_Data_BindingValue_1">BindingValue(T)</a>, but where <a href="T_Avalonia_Data_BindingValue_1">BindingValue(T)</a> is used by typed bindings, this class is used to hold binding and data validation errors in untyped bindings. As Avalonia moves towards using typed bindings by default we may want to remove this class.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification__ctor_2">BindingNotification(Object)</a></td>
<td>Initializes a new instance of the BindingNotification class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification__ctor_1">BindingNotification(Exception, BindingErrorType)</a></td>
<td>Initializes a new instance of the BindingNotification class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification__ctor">BindingNotification(Exception, BindingErrorType, Object)</a></td>
<td>Initializes a new instance of the BindingNotification class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_BindingNotification_Error">Error</a></td>
<td>Gets the error that occurred on the source, if any.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingNotification_ErrorType">ErrorType</a></td>
<td>Gets the type of error that <a href="P_Avalonia_Data_BindingNotification_Error">Error</a> represents, if any.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingNotification_HasValue">HasValue</a></td>
<td>Gets a value indicating whether <a href="P_Avalonia_Data_BindingNotification_Value">Value</a> should be pushed to the target.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingNotification_Value">Value</a></td>
<td>Gets the value that should be passed to the target when <a href="P_Avalonia_Data_BindingNotification_HasValue">HasValue</a> is true.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_AddError">AddError(Exception, BindingErrorType)</a></td>
<td>Adds an error to the BindingNotification.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_ClearValue">ClearValue()</a></td>
<td>Removes the <a href="P_Avalonia_Data_BindingNotification_Value">Value</a> and makes <a href="P_Avalonia_Data_BindingNotification_HasValue">HasValue</a> return null.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_Equals">Equals(BindingNotification)</a></td>
<td>Compares a value to an instance of BindingNotification for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_Equals_1">Equals(Object)</a></td>
<td>Compares an object to an instance of BindingNotification for equality.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_ExtractError">ExtractError(Object)</a></td>
<td>Gets an exception from an object that may be a BindingNotification.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_ExtractValue">ExtractValue(Object)</a></td>
<td>Gets a value from an object that may be a BindingNotification.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_GetHashCode">GetHashCode()</a></td>
<td>Gets the hash code for this instance of BindingNotification.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_SetValue">SetValue(Object)</a></td>
<td>Sets the <a href="P_Avalonia_Data_BindingNotification_Value">Value</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_ToString">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_UpdateValue">UpdateValue(Object, Object)</a></td>
<td>Updates the value of an object that may be a BindingNotification.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_op_Equality">Equality(BindingNotification, BindingNotification)</a></td>
<td>Compares two instances of BindingNotification for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingNotification_op_Inequality">Inequality(BindingNotification, BindingNotification)</a></td>
<td>Compares two instances of BindingNotification for inequality.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Data_BindingNotification_Null">Null</a></td>
<td>A binding notification representing the null value.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Data_BindingNotification_UnsetValue">UnsetValue</a></td>
<td>A binding notification representing <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
