# SnapPointsType Enumeration


Specify how panning snap points are processed for gesture input.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum SnapPointsType
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration SnapPointsType
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type SnapPointsType
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/SnapPointsType.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>None</td>
<td>0</td>
<td>No snapping behavior.</td>
</tr>
<tr>
<td>Mandatory</td>
<td>1</td>
<td>Content always stops at the snap point closest to where inertia would naturally stop along the direction of inertia.</td>
</tr>
<tr>
<td>MandatorySingle</td>
<td>2</td>
<td>Content always stops at the snap point closest to the release point along the direction of inertia.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

