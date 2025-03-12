# DirectPropertyBase&lt;TValue&gt; Class


Base class for direct properties.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class DirectPropertyBase<TValue> : AvaloniaProperty<TValue>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class DirectPropertyBase(Of TValue)
	Inherits AvaloniaProperty(Of TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type DirectPropertyBase<'TValue> = 
    class
        inherit AvaloniaProperty<'TValue>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/DirectPropertyBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>  →  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(TValue)  →  DirectPropertyBase(TValue)</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_DirectProperty_2">Avalonia.DirectProperty(TOwner, TValue)</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd>The type of the property's value.</dd></dl>Whereas <a href="T_Avalonia_DirectProperty_2">DirectProperty(TOwner, TValue)</a> is typed on the owner type, this base class provides a non-owner-typed interface to a direct property.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_1_Changed">Changed</a></td>
<td>Gets an observable that is fired when this property changes on any <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> instance.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty(TValue)</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Inherits">Inherits</a></td>
<td>Gets a value indicating whether the property inherits its value.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsAttached">IsAttached</a></td>
<td>Gets a value indicating whether this is an attached property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsDirect">IsDirect</a></td>
<td>Gets a value indicating whether this is a direct property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsReadOnly">IsReadOnly</a></td>
<td>Gets a value indicating whether this is a readonly property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Name">Name</a></td>
<td>Gets the name of the property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_DirectPropertyBase_1_Owner">Owner</a></td>
<td>Gets the type that registered the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_OwnerType">OwnerType</a></td>
<td>Gets the type of the class that registered the property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_PropertyType">PropertyType</a></td>
<td>Gets the type of the property's value.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Bind">Bind()</a></td>
<td>Returns a binding accessor that can be passed to <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>'s [] operator to initiate a binding.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals">Equals(AvaloniaProperty)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals_1">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetHashCode">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetMetadata">GetMetadata(AvaloniaObject)</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetMetadata_1">GetMetadata(Type)</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata__1">GetMetadata(T)()</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified type.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetUnsetValue">GetUnsetValue(AvaloniaObject)</a></td>
<td>Gets the unset value for the property on the specified object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_GetUnsetValue_1">GetUnsetValue(Type)</a></td>
<td>Gets the unset value for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_IsValidValue">IsValidValue(Object)</a></td>
<td>Checks whether the <em>value</em> is valid for the property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_OverrideMetadata">OverrideMetadata(Type, DirectPropertyMetadata(TValue))</a></td>
<td>Overrides the metadata for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_DirectPropertyBase_1_OverrideMetadata__1">OverrideMetadata(T)(DirectPropertyMetadata(TValue))</a></td>
<td>Overrides the metadata for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_ToString">ToString()</a></td>
<td>Gets the string representation of the property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Unregister">Unregister(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

