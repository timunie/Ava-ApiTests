# AvaloniaPropertyValue Class


Holds diagnostic-related information about the value of an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on an <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Diagnostics">Avalonia.Diagnostics</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class AvaloniaPropertyValue
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class AvaloniaPropertyValue
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type AvaloniaPropertyValue = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Diagnostics/AvaloniaPropertyValue.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaPropertyValue</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Diagnostics_AvaloniaPropertyValue_Diagnostic">Diagnostic</a></td>
<td>Gets a diagnostic string.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Diagnostics_AvaloniaPropertyValue_IsOverriddenCurrentValue">IsOverriddenCurrentValue</a></td>
<td>Gets a value indicating whether the <a href="P_Avalonia_Diagnostics_AvaloniaPropertyValue_Value">Value</a> was overridden by a call to <a href="M_Avalonia_AvaloniaObject_SetCurrentValue__1">SetCurrentValue(T)(StyledProperty(T), T)</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Diagnostics_AvaloniaPropertyValue_Priority">Priority</a></td>
<td>Gets the priority of the current value.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Diagnostics_AvaloniaPropertyValue_Property">Property</a></td>
<td>Gets the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Diagnostics_AvaloniaPropertyValue_Value">Value</a></td>
<td>Gets the current property value.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Diagnostics">Avalonia.Diagnostics Namespace</a>  
