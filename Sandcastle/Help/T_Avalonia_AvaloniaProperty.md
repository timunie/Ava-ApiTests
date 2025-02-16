---
title:AvaloniaProperty Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AvaloniaProperty Class




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public abstract class AvaloniaProperty : IEquatable<AvaloniaProperty>, 
	IPropertyInfo
```
**VB**
``` VB
Public MustInherit Class AvaloniaProperty
	Implements IEquatable(Of AvaloniaProperty), IPropertyInfo
```
**F#**
``` F#
[<AbstractClassAttribute>]
type AvaloniaProperty = 
    class
        interface IEquatable<AvaloniaProperty>
        interface IPropertyInfo
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaProperty</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_AvaloniaProperty_1">Avalonia.AvaloniaProperty(TValue)</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_Core_IPropertyInfo">IPropertyInfo</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(AvaloniaProperty)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Changed">Changed</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Inherits">Inherits</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsAttached">IsAttached</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsDirect">IsDirect</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsReadOnly">IsReadOnly</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Name">Name</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_OwnerType">OwnerType</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_PropertyType">PropertyType</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Bind">Bind()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals">Equals(AvaloniaProperty)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata">GetMetadata(AvaloniaObject)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata_1">GetMetadata(Type)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata__1">GetMetadata(T)()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_IsValidValue">IsValidValue(Object)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Register__2">Register(TOwner, TValue)(String, TValue, Boolean, BindingMode, Func(TValue, Boolean), Func(AvaloniaObject, TValue, TValue), Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_RegisterAttached__2">RegisterAttached(THost, TValue)(String, Type, TValue, Boolean, BindingMode, Func(TValue, Boolean), Func(AvaloniaObject, TValue, TValue))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_RegisterAttached__3">RegisterAttached(TOwner, THost, TValue)(String, TValue, Boolean, BindingMode, Func(TValue, Boolean), Func(AvaloniaObject, TValue, TValue))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_RegisterDirect__2">RegisterDirect(TOwner, TValue)(String, Func(TOwner, TValue), Action(TOwner, TValue), TValue, BindingMode, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Unregister">Unregister(Type)</a></td>
<td> </td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_Equality">Equality(AvaloniaProperty, AvaloniaProperty)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_Inequality">Inequality(AvaloniaProperty, AvaloniaProperty)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_LogicalNot">LogicalNot(AvaloniaProperty)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_OnesComplement">OnesComplement(AvaloniaProperty)</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
