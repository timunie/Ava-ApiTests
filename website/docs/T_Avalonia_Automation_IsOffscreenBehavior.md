# IsOffscreenBehavior Enumeration


This enum offers different ways of evaluating the IsOffscreen AutomationProperty



## Definition
**Namespace:** <a href="N_Avalonia_Automation">Avalonia.Automation</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum IsOffscreenBehavior
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration IsOffscreenBehavior
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IsOffscreenBehavior
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/IsOffscreenBehavior.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Default</td>
<td>0</td>
<td>The AutomationProperty IsOffscreen is calculated based on IsVisible.</td>
</tr>
<tr>
<td>Onscreen</td>
<td>1</td>
<td>The AutomationProperty IsOffscreen is false.</td>
</tr>
<tr>
<td>Offscreen</td>
<td>2</td>
<td>The AutomationProperty IsOffscreen if true.</td>
</tr>
<tr>
<td>FromClip</td>
<td>3</td>
<td>The AutomationProperty IsOffscreen is calculated based on clip regions.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation">Avalonia.Automation Namespace</a>  
