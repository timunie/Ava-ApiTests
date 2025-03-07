# Setter Class


A setter for a <a href="T_Avalonia_Styling_Style">Style</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Setter : SetterBase, ISetterInstance, 
	IAnimationSetter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Setter
	Inherits SetterBase
	Implements ISetterInstance, IAnimationSetter
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Setter = 
    class
        inherit SetterBase
        interface ISetterInstance
        interface IAnimationSetter
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Setter.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Styling_SetterBase">SetterBase</a>  →  Setter</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Animation_IAnimationSetter">IAnimationSetter</a>, <a href="T_Avalonia_Styling_ISetterInstance">ISetterInstance</a></td></tr>
</table>

A Setter is used to set a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value on a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> depending on a condition.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Styling_Setter__ctor">Setter()</a></td>
<td>Initializes a new instance of the Setter class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Setter__ctor_1">Setter(AvaloniaProperty, Object)</a></td>
<td>Initializes a new instance of the Setter class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Styling_Setter_Property">Property</a></td>
<td>Gets or sets the property to set.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_Setter_Value">Value</a></td>
<td>Gets or sets the property value.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_Setter_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
