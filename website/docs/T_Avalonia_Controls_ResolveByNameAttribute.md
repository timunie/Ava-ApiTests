# ResolveByNameAttribute Class


Indicates that the property resolves an element by Name or x:Name. When applying this to attached properties, ensure to put on both the Getter and Setter methods.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[AttributeUsageAttribute(AttributeTargets.Method|AttributeTargets.Property)]
public sealed class ResolveByNameAttribute : Attribute
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<AttributeUsageAttribute(AttributeTargets.Method Or AttributeTargets.Property)>
Public NotInheritable Class ResolveByNameAttribute
	Inherits Attribute
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
[<AttributeUsageAttribute(AttributeTargets.Method|AttributeTargets.Property)>]
type ResolveByNameAttribute = 
    class
        inherit Attribute
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ResolveByNameAttribute.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.attribute" target="_blank" rel="noopener noreferrer">Attribute</a>  →  ResolveByNameAttribute</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_ResolveByNameAttribute__ctor">ResolveByNameAttribute()</a></td>
<td>Initializes a new instance of the ResolveByNameAttribute class</td>
</tr>
</table>

## Properties
<table>
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
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

