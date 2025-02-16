---
title:Optional&lt;T&gt; Structure
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Optional&lt;T&gt; Structure




## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public readonly struct Optional<T> : IEquatable<Optional<T>>

```
**VB**
``` VB
Public Structure Optional(Of T)
	Implements IEquatable(Of Optional(Of T))
```
**F#**
``` F#
[<SealedAttribute>]
type Optional<'T> = 
    struct
        inherit ValueType
        interface IEquatable<Optional<'T>>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  Optional(T)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Optional(T))</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Optional_1__ctor">Optional(T)(T)</a></td>
<td>Initializes a new instance of the Optional(T) class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Optional_1_Empty">Empty</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Optional_1_HasValue">HasValue</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Optional_1_Value">Value</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.equals" target="_blank" rel="noopener noreferrer">ValueType.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_Equals">Equals(Optional(T))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.gethashcode" target="_blank" rel="noopener noreferrer">ValueType.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault">GetValueOrDefault()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault_1">GetValueOrDefault(T)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault__1">GetValueOrDefault(TResult)()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_GetValueOrDefault__1_1">GetValueOrDefault(TResult)(TResult)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_ToObject">ToObject()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.valuetype.tostring" target="_blank" rel="noopener noreferrer">ValueType.ToString()</a>)</td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_op_Equality">Equality(Optional(T), Optional(T))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_op_Implicit">Implicit(T to Optional(T))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Optional_1_op_Inequality">Inequality(Optional(T), Optional(T))</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
