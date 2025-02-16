---
title:AttachedProperty&lt;TValue&gt; Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AttachedProperty&lt;TValue&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public sealed class AttachedProperty<TValue> : StyledProperty<TValue>

```
**VB**
``` VB
Public NotInheritable Class AttachedProperty(Of TValue)
	Inherits StyledProperty(Of TValue)
```
**F#**
``` F#
[<SealedAttribute>]
type AttachedProperty<'TValue> = 
    class
        inherit StyledProperty<'TValue>
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>  →  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(TValue)  →  <a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(TValue)  →  AttachedProperty(TValue)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_1_Changed">Changed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty(TValue)</a>)</td></tr>
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
<td><a href="P_Avalonia_AvaloniaProperty_OwnerType">OwnerType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_PropertyType">PropertyType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_StyledProperty_1_ValidateValue">ValidateValue</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AttachedProperty_1_AddOwner__1">AddOwner(TOwner)(StyledPropertyMetadata(TValue))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Bind">Bind()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_CoerceValue">CoerceValue(AvaloniaObject, TValue)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals">Equals(AvaloniaProperty)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals_1">Equals(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_GetDefaultValue">GetDefaultValue(AvaloniaObject)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_GetDefaultValue_1">GetDefaultValue(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetHashCode">GetHashCode()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_GetMetadata">GetMetadata(AvaloniaObject)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_GetMetadata_1">GetMetadata(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata__1">GetMetadata(T)()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_IsValidValue">IsValidValue(Object)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideDefaultValue">OverrideDefaultValue(Type, TValue)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideDefaultValue__1">OverrideDefaultValue(T)(TValue)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideMetadata">OverrideMetadata(Type, StyledPropertyMetadata(TValue))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideMetadata__1">OverrideMetadata(T)(StyledPropertyMetadata(TValue))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_ToString">ToString()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_StyledProperty_1">StyledProperty(TValue)</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Unregister">Unregister(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
