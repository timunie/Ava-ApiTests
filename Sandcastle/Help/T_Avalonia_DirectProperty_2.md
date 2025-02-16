---
title:DirectProperty&lt;TOwner, TValue&gt; Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# DirectProperty&lt;TOwner, TValue&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class DirectProperty<TOwner, TValue> : DirectPropertyBase<TValue>
where TOwner : AvaloniaObject

```
**VB**
``` VB
Public Class DirectProperty(Of TOwner As AvaloniaObject, TValue)
	Inherits DirectPropertyBase(Of TValue)
```
**F#**
``` F#
type DirectProperty<'TOwner, 'TValue when 'TOwner : AvaloniaObject> = 
    class
        inherit DirectPropertyBase<'TValue>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>  →  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(TValue)  →  <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase</a>(TValue)  →  DirectProperty(TOwner, TValue)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_1_Changed">Changed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_DirectProperty_2_Getter">Getter</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Inherits">Inherits</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsAttached">IsAttached</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsDirect">IsDirect</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsReadOnly">IsReadOnly</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Name">Name</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_DirectPropertyBase_1_Owner">Owner</a></td>
<td><br />(Inherited from <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue)</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_OwnerType">OwnerType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_PropertyType">PropertyType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_DirectProperty_2_Setter">Setter</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_DirectProperty_2_AddOwner__1">AddOwner(TNewOwner)(Func(TNewOwner, TValue), Action(TNewOwner, TValue), TValue, BindingMode, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Bind">Bind()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals">Equals(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals_1">Equals(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetHashCode">GetHashCode()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetMetadata">GetMetadata(AvaloniaObject)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetMetadata_1">GetMetadata(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata__1">GetMetadata(T)()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetUnsetValue">GetUnsetValue(AvaloniaObject)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetUnsetValue_1">GetUnsetValue(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_IsValidValue">IsValidValue(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_OverrideMetadata">OverrideMetadata(Type, DirectPropertyMetadata(TValue))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_OverrideMetadata__1">OverrideMetadata(T)(DirectPropertyMetadata(TValue))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_ToString">ToString()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Unregister">Unregister(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
