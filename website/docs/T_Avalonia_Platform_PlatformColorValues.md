# PlatformColorValues Class


Information about current system color values, including information about dark mode and accent colors.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class PlatformColorValues : IEquatable<PlatformColorValues>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class PlatformColorValues
	Implements IEquatable(Of PlatformColorValues)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type PlatformColorValues = 
    class
        interface IEquatable<PlatformColorValues>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/PlatformColorValues.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  PlatformColorValues</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PlatformColorValues)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Platform_PlatformColorValues__ctor">PlatformColorValues()</a></td>
<td>Initializes a new instance of the PlatformColorValues class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_PlatformColorValues_AccentColor1">AccentColor1</a></td>
<td>Primary system accent color.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_PlatformColorValues_AccentColor2">AccentColor2</a></td>
<td>Secondary system accent color. On some platforms can return the same value as <a href="P_Avalonia_Platform_PlatformColorValues_AccentColor1">AccentColor1</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_PlatformColorValues_AccentColor3">AccentColor3</a></td>
<td>Tertiary system accent color. On some platforms can return the same value as <a href="P_Avalonia_Platform_PlatformColorValues_AccentColor1">AccentColor1</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_PlatformColorValues_ContrastPreference">ContrastPreference</a></td>
<td>System high contrast preference.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_PlatformColorValues_ThemeVariant">ThemeVariant</a></td>
<td>System theme variant or mode.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

