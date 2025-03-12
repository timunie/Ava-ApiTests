# BindingValue&lt;T&gt; Structure


A value passed into a binding.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct BindingValue<T> : IEquatable<BindingValue<T>>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure BindingValue(Of T)
	Implements IEquatable(Of BindingValue(Of T))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type BindingValue<'T> = 
    struct
        inherit ValueType
        interface IEquatable<BindingValue<'T>>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingValue.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  BindingValue(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(BindingValue(T))</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The value type.</dd></dl>The avalonia binding system is typed, and as such additional state is stored in this structure. A binding value can be in a number of states, described by the <a href="P_Avalonia_Data_BindingValue_1_Type">Type</a> property: - <a href="T_Avalonia_Data_BindingValueType">Value</a>: a simple value - <a href="T_Avalonia_Data_BindingValueType">UnsetValue</a>: the target property will revert to its unbound state until a new binding value is produced. Represented by <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a> in an untyped context - <a href="T_Avalonia_Data_BindingValueType">DoNothing</a>: the binding value will be ignored. Represented by <a href="F_Avalonia_Data_BindingOperations_DoNothing">DoNothing</a> in an untyped context - <a href="T_Avalonia_Data_BindingValueType">BindingError</a>: a binding error, such as a missing source property, with an optional fallback value - <a href="T_Avalonia_Data_BindingValueType">DataValidationError</a>: a data validation error, with an optional fallback value To create a new binding value you can: - For a simple value, call the BindingValue(T) constructor or use an implicit conversion from *T* - For an unset value, use <a href="P_Avalonia_Data_BindingValue_1_Unset">Unset</a> or simply `default` - For other types, call one of the static factory methods

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1__ctor">BindingValue(T)(T)</a></td>
<td>Initializes a new instance of the BindingValue(T) struct with a type of <a href="T_Avalonia_Data_BindingValueType">Value</a></td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_BindingValue_1_DoNothing">DoNothing</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">DoNothing</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingValue_1_Error">Error</a></td>
<td>Gets the binding or data validation error.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingValue_1_HasError">HasError</a></td>
<td>Gets a value indicating whether the binding value represents either a binding or data validation error.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingValue_1_HasValue">HasValue</a></td>
<td>Gets a value indicating whether the binding value has a value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingValue_1_Type">Type</a></td>
<td>Gets the type of the binding value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingValue_1_Unset">Unset</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">UnsetValue</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingValue_1_Value">Value</a></td>
<td>Gets the binding value or fallback value.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_BindingError_2">BindingError(Exception)</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">BindingError</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_BindingError_1">BindingError(Exception, T)</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">BindingErrorWithFallback</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_BindingError">BindingError(Exception, Optional(T))</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">BindingError</a> or <a href="T_Avalonia_Data_BindingValueType">BindingErrorWithFallback</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_DataValidationError_2">DataValidationError(Exception)</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">DataValidationError</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_DataValidationError_1">DataValidationError(Exception, T)</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">DataValidationErrorWithFallback</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_DataValidationError">DataValidationError(Exception, Optional(T))</a></td>
<td>Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">DataValidationError</a> or <a href="T_Avalonia_Data_BindingValueType">DataValidationErrorWithFallback</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_FromUntyped_1">FromUntyped(Object)</a></td>
<td>Creates a BindingValue(T) from an object, handling the special values <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a>, <a href="F_Avalonia_Data_BindingOperations_DoNothing">DoNothing</a> and <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_FromUntyped">FromUntyped(Object, Type)</a></td>
<td>Creates a BindingValue(T) from an object, handling the special values <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a>, <a href="F_Avalonia_Data_BindingOperations_DoNothing">DoNothing</a> and <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_GetValueOrDefault">GetValueOrDefault()</a></td>
<td>Gets the value of the binding value if present, otherwise the default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_GetValueOrDefault_1">GetValueOrDefault(T)</a></td>
<td>Gets the value of the binding value if present, otherwise a default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_GetValueOrDefault__1">GetValueOrDefault(TResult)()</a></td>
<td>Gets the value if present, otherwise the default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_GetValueOrDefault__1_1">GetValueOrDefault(TResult)(TResult)</a></td>
<td>Gets the value of the binding value if present, otherwise a default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_ToOptional">ToOptional()</a></td>
<td>Converts the binding value to an <a href="T_Avalonia_Data_Optional_1">Optional(T)</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_ToString">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_ToUntyped">ToUntyped()</a></td>
<td>Converts the value to untyped representation, using <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a>, <a href="F_Avalonia_Data_BindingOperations_DoNothing">DoNothing</a> and <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> where appropriate.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_WithValue">WithValue(T)</a></td>
<td>Returns a new binding value with the specified value.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_op_Implicit_1">Implicit(T to BindingValue(T))</a></td>
<td>Creates a binding value from an instance of the underlying value type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingValue_1_op_Implicit">Implicit(Optional(T) to BindingValue(T))</a></td>
<td>Creates a binding value from an <a href="T_Avalonia_Data_Optional_1">Optional(T)</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

