# ExtendClientAreaChromeHints Enumeration


Hint for Window Chrome when ClientArea is Extended.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum ExtendClientAreaChromeHints
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration ExtendClientAreaChromeHints
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type ExtendClientAreaChromeHints
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/ExtendClientAreaChromeHints.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>NoChrome</td>
<td>0</td>
<td>The will be no chrome at all.</td>
</tr>
<tr>
<td>SystemChrome</td>
<td>1</td>
<td>Use SystemChrome</td>
</tr>
<tr>
<td>Default</td>
<td>2</td>
<td>The default for the platform.</td>
</tr>
<tr>
<td>PreferSystemChrome</td>
<td>2</td>
<td>Use system chrome where possible. OSX system chrome is used, Windows managed chrome is used. This is because Windows Chrome can not be shown on top of user content.</td>
</tr>
<tr>
<td>OSXThickTitleBar</td>
<td>8</td>
<td>On OSX the titlebar is the thicker toolbar kind. Causes traffic lights to be positioned slightly lower than normal.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

