# FlyoutShowMode Enumeration




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum FlyoutShowMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration FlyoutShowMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FlyoutShowMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Flyouts/FlyoutShowMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Standard</td>
<td>0</td>
<td>Behavior is typical of a flyout shown reactively, like a context menu. The open flyout takes focus. For a CommandBarFlyout, it opens in it's expanded state.</td>
</tr>
<tr>
<td>Transient</td>
<td>1</td>
<td>Behavior is typical of a flyout shown proactively. The open flyout does not take focus.</td>
</tr>
<tr>
<td>TransientWithDismissOnPointerMoveAway</td>
<td>2</td>
<td>The flyout exhibits Transient behavior while the cursor is close to it, but is dismissed when the cursor moves away.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
