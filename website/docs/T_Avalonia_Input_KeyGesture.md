# KeyGesture Class


Defines a keyboard input combination.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class KeyGesture : IEquatable<KeyGesture>, 
	IFormattable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class KeyGesture
	Implements IEquatable(Of KeyGesture), IFormattable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type KeyGesture = 
    class
        interface IEquatable<KeyGesture>
        interface IFormattable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyGesture.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  KeyGesture</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(KeyGesture), <a href="https://learn.microsoft.com/dotnet/api/system.iformattable" target="_blank" rel="noopener noreferrer">IFormattable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture__ctor">KeyGesture(Key, KeyModifiers)</a></td>
<td>Initializes a new instance of the KeyGesture class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_KeyGesture_Key">Key</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_KeyGesture_KeyModifiers">KeyModifiers</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_Equals">Equals(KeyGesture)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_Equals_1">Equals(Object)</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_GetHashCode">GetHashCode()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_Matches">Matches(KeyEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_Parse">Parse(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_ToString">ToString()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_ToString_1">ToString(String, IFormatProvider)</a></td>
<td>Returns the current KeyGesture as a string formatted according to the format string and appropriate IFormatProvider</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_op_Equality">Equality(KeyGesture, KeyGesture)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_KeyGesture_op_Inequality">Inequality(KeyGesture, KeyGesture)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
