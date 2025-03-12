# Optional&lt;T&gt; Structure


An optional typed value.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct Optional<T> : IEquatable<Optional<T>>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure Optional(Of T)
	Implements IEquatable(Of Optional(Of T))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type Optional<'T> = 
    struct
        inherit ValueType
        interface IEquatable<Optional<'T>>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Optional.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Optional(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Optional(T))</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The value type.</dd></dl>This struct is similar to <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable(T)</a> except it also accepts reference types: note that null is a valid value for reference types. It is also similar to <a href="T_Avalonia_Data_BindingValue_1">BindingValue(T)</a> but has only two states: "value present" and "value missing". To create a new optional value you can: - For a simple value, call the Optional(T) constructor or use an implicit conversion from *T* - For an missing value, use <a href="P_Avalonia_Data_Optional_1_Empty">Empty</a> or simply `default`

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Optional_1__ctor">Optional(T)(T)</a></td>
<td>Initializes a new instance of the Optional(T) struct with value.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Optional_1_Empty">Empty</a></td>
<td>Returns an Optional(T) without a value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Optional_1_HasValue">HasValue</a></td>
<td>Gets a value indicating whether a value is present.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Optional_1_Value">Value</a></td>
<td>Gets the value.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_Equals_1">Equals(Object)</a></td>
<td>Indicates whether this instance and a specified object are equal.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_Equals">Equals(Optional(T))</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetHashCode">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault">GetValueOrDefault()</a></td>
<td>Gets the value if present, otherwise the default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault_1">GetValueOrDefault(T)</a></td>
<td>Gets the value if present, otherwise a default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault__1">GetValueOrDefault(TResult)()</a></td>
<td>Gets the value if present, otherwise the default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault__1_1">GetValueOrDefault(TResult)(TResult)</a></td>
<td>Gets the value if present, otherwise a default value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_ToObject">ToObject()</a></td>
<td>Casts the value (if any) to an <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_ToString">ToString()</a></td>
<td>Returns the fully qualified type name of this instance.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_op_Equality">Equality(Optional(T), Optional(T))</a></td>
<td>Compares two Optional(T)s for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_op_Implicit">Implicit(T to Optional(T))</a></td>
<td>Creates an Optional(T) from an instance of the underlying value type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_op_Inequality">Inequality(Optional(T), Optional(T))</a></td>
<td>Compares two Optional(T)s for inequality.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

