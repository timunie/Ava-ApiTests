# TemplatePartAttribute Class


Defines a control template part referenced by name in code. Template part names should begin with the "PART_" prefix.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Metadata">Avalonia.Controls.Metadata</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class TemplatePartAttribute : Attribute
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class TemplatePartAttribute
	Inherits Attribute
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TemplatePartAttribute = 
    class
        inherit Attribute
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/Metadata/TemplatePartAttribute.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>  →  TemplatePartAttribute</td></tr>
</table>

Style authors should be able to identify the part type used for styling the specific control. The part is usually required in the style and should have a specific predefined name.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Metadata_TemplatePartAttribute__ctor">TemplatePartAttribute()</a></td>
<td>Initializes a new instance of the TemplatePartAttribute class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Metadata_TemplatePartAttribute__ctor_1">TemplatePartAttribute(String, Type)</a></td>
<td>Initializes a new instance of the TemplatePartAttribute class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Metadata_TemplatePartAttribute_IsRequired">IsRequired</a></td>
<td>Gets or sets a value indicating whether the template part is mandatory to be present in the template.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Metadata_TemplatePartAttribute_Name">Name</a></td>
<td>Gets or sets the part name used by the class to identify a required element in the style. Template part names should begin with the "PART_" prefix.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Metadata_TemplatePartAttribute_Type">Type</a></td>
<td>Gets or sets the type of the element that should be used as a part with name specified in <a href="P_Avalonia_Controls_Metadata_TemplatePartAttribute_Name">Name</a>.</td>
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
<a href="N_Avalonia_Controls_Metadata">Avalonia.Controls.Metadata Namespace</a>  
