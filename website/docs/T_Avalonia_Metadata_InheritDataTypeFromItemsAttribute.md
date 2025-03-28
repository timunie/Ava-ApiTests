# InheritDataTypeFromItemsAttribute Class


Instructs the compiler to resolve the compiled bindings data type for the item-specific properties of collection-like controls.



## Definition
**Namespace:** <a href="N_Avalonia_Metadata">Avalonia.Metadata</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[AttributeUsageAttribute(AttributeTargets.Property, AllowMultiple = false, 
	Inherited = true)]
public sealed class InheritDataTypeFromItemsAttribute : Attribute
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<AttributeUsageAttribute(AttributeTargets.Property, AllowMultiple := false, 
	Inherited := true)>
Public NotInheritable Class InheritDataTypeFromItemsAttribute
	Inherits Attribute
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
[<AttributeUsageAttribute(AttributeTargets.Property, AllowMultiple = false, 
	Inherited = true)>]
type InheritDataTypeFromItemsAttribute = 
    class
        inherit Attribute
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Metadata/InheritDataTypeFromItemsAttribute.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>  →  InheritDataTypeFromItemsAttribute</td></tr>
</table>



## Remarks
A typical usage example is a ListBox control, where InheritDataTypeFromItemsAttribute is defined on the ItemTemplate property, allowing the template to inherit the data type from the Items collection binding.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Metadata_InheritDataTypeFromItemsAttribute__ctor">InheritDataTypeFromItemsAttribute(String)</a></td>
<td>Initializes a new instance of the InheritDataTypeFromItemsAttribute class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Metadata_InheritDataTypeFromItemsAttribute_AncestorItemsProperty">AncestorItemsProperty</a></td>
<td>The name of the property whose item type should be used on the target property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Metadata_InheritDataTypeFromItemsAttribute_AncestorType">AncestorType</a></td>
<td>The ancestor type to be used in a lookup for the <a href="P_Avalonia_Metadata_InheritDataTypeFromItemsAttribute_AncestorItemsProperty">AncestorItemsProperty</a>. If null, the declaring type of the target property is used.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.attribute.typeid" target="_blank" rel="noopener noreferrer">TypeId</a></td>
<td>When implemented in a derived class, gets a unique identifier for this <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.attribute.equals" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Returns a value that indicates whether this instance is equal to a specified object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Returns the hash code for this instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute" target="_blank" rel="noopener noreferrer">IsDefaultAttribute()</a></td>
<td>When overridden in a derived class, indicates whether the value of this instance is the default value for the derived class.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.attribute.match" target="_blank" rel="noopener noreferrer">Match(Object)</a></td>
<td>When overridden in a derived class, returns a value that indicates whether this instance equals a specified object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Metadata">Avalonia.Metadata Namespace</a>  

