# StyledProperty&lt;TValue&gt; Class


A styled avalonia property.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class StyledProperty<TValue> : AvaloniaProperty<TValue>

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class StyledProperty(Of TValue)
	Inherits AvaloniaProperty(Of TValue)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type StyledProperty<'TValue> = 
    class
        inherit AvaloniaProperty<'TValue>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/StyledProperty.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>  →  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(TValue)  →  StyledProperty(TValue)</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_AttachedProperty_1">Avalonia.AttachedProperty(TValue)</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /></dl>

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
<td><a href="P_Avalonia_AvaloniaProperty_OwnerType">OwnerType</a></td>
<td>Gets the type of the class that registered the property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_PropertyType">PropertyType</a></td>
<td>Gets the type of the property's value.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_StyledProperty_1_ValidateValue">ValidateValue</a></td>
<td>A method which returns "false" for values that are never valid for this property.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_AddOwner__1">AddOwner(TOwner)(StyledPropertyMetadata(TValue))</a></td>
<td>Registers the property on another type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Bind">Bind()</a></td>
<td>Returns a binding accessor that can be passed to <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>'s [] operator to initiate a binding.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_CoerceValue">CoerceValue(AvaloniaObject, TValue)</a></td>
<td> </td>
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
<td><a href="M_Avalonia_StyledProperty_1_GetDefaultValue">GetDefaultValue(AvaloniaObject)</a></td>
<td>Gets the default value for the property on the specified object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_GetDefaultValue_1">GetDefaultValue(Type)</a></td>
<td>Gets the default value for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetHashCode">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_GetMetadata">GetMetadata(AvaloniaObject)</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_GetMetadata_1">GetMetadata(Type)</a></td>
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
<td><a href="M_Avalonia_AvaloniaProperty_IsValidValue">IsValidValue(Object)</a></td>
<td>Checks whether the <em>value</em> is valid for the property.<br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideDefaultValue">OverrideDefaultValue(Type, TValue)</a></td>
<td>Overrides the default value for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideDefaultValue__1">OverrideDefaultValue(T)(TValue)</a></td>
<td>Overrides the default value for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideMetadata">OverrideMetadata(Type, StyledPropertyMetadata(TValue))</a></td>
<td>Overrides the metadata for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_OverrideMetadata__1">OverrideMetadata(T)(StyledPropertyMetadata(TValue))</a></td>
<td>Overrides the metadata for the property on the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_StyledProperty_1_ToString">ToString()</a></td>
<td>Gets the string representation of the property.<br />(Overrides <a href="M_Avalonia_AvaloniaProperty_ToString">AvaloniaProperty.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Unregister">Unregister(Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

