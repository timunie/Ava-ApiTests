# AvaloniaProperty Class


Base class for avalonia properties.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class AvaloniaProperty : IEquatable<AvaloniaProperty>, 
	IPropertyInfo
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class AvaloniaProperty
	Implements IEquatable(Of AvaloniaProperty), IPropertyInfo
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type AvaloniaProperty = 
    class
        interface IEquatable<AvaloniaProperty>
        interface IPropertyInfo
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaProperty</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_AvaloniaProperty_1">Avalonia.AvaloniaProperty(TValue)</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_Core_IPropertyInfo">IPropertyInfo</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(AvaloniaProperty)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Changed">Changed</a></td>
<td>Gets an observable that is fired when this property changes on any <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> instance.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Inherits">Inherits</a></td>
<td>Gets a value indicating whether the property inherits its value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsAttached">IsAttached</a></td>
<td>Gets a value indicating whether this is an attached property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsDirect">IsDirect</a></td>
<td>Gets a value indicating whether this is a direct property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_IsReadOnly">IsReadOnly</a></td>
<td>Gets a value indicating whether this is a readonly property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_Name">Name</a></td>
<td>Gets the name of the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_OwnerType">OwnerType</a></td>
<td>Gets the type of the class that registered the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaProperty_PropertyType">PropertyType</a></td>
<td>Gets the type of the property's value.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Bind">Bind()</a></td>
<td>Returns a binding accessor that can be passed to <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>'s [] operator to initiate a binding.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals">Equals(AvaloniaProperty)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Equals_1">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetHashCode">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata">GetMetadata(AvaloniaObject)</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata_1">GetMetadata(Type)</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified type.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_GetMetadata__1">GetMetadata(T)()</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> which applies to this property when it is used with the specified type.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_IsValidValue">IsValidValue(Object)</a></td>
<td>Checks whether the <em>value</em> is valid for the property.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Register__2">Register(TOwner, TValue)(String, TValue, Boolean, BindingMode, Func(TValue, Boolean), Func(AvaloniaObject, TValue, TValue), Boolean)</a></td>
<td>Registers a AvaloniaProperty.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_RegisterAttached__2">RegisterAttached(THost, TValue)(String, Type, TValue, Boolean, BindingMode, Func(TValue, Boolean), Func(AvaloniaObject, TValue, TValue))</a></td>
<td>Registers an attached AvaloniaProperty.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_RegisterAttached__3">RegisterAttached(TOwner, THost, TValue)(String, TValue, Boolean, BindingMode, Func(TValue, Boolean), Func(AvaloniaObject, TValue, TValue))</a></td>
<td>Registers an attached AvaloniaProperty.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_RegisterDirect__2">RegisterDirect(TOwner, TValue)(String, Func(TOwner, TValue), Action(TOwner, TValue), TValue, BindingMode, Boolean)</a></td>
<td>Registers a direct AvaloniaProperty.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_ToString">ToString()</a></td>
<td>Gets the string representation of the property.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_Unregister">Unregister(Type)</a></td>
<td> </td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_Equality">Equality(AvaloniaProperty, AvaloniaProperty)</a></td>
<td>Tests two AvaloniaPropertys for equality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_Inequality">Inequality(AvaloniaProperty, AvaloniaProperty)</a></td>
<td>Tests two AvaloniaPropertys for inequality.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_LogicalNot">LogicalNot(AvaloniaProperty)</a></td>
<td>Provides access to a property's binding via the <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> indexer.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaProperty_op_OnesComplement">OnesComplement(AvaloniaProperty)</a></td>
<td>Provides access to a property's template binding via the <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> indexer.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a></td>
<td>Represents an unset property value.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
