# HoldingState Enumeration




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum HoldingState
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration HoldingState
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type HoldingState
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Started</td>
<td>0</td>
<td>A single contact has been detected and a time threshold is crossed without the contact being lifted, another contact detected, or another gesture started.</td>
</tr>
<tr>
<td>Completed</td>
<td>1</td>
<td>The single contact is lifted.</td>
</tr>
<tr>
<td>Cancelled</td>
<td>2</td>
<td>An additional contact is detected or a subsequent gesture (such as a slide) is detected.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
