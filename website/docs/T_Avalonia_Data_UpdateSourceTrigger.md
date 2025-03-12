# UpdateSourceTrigger Enumeration


Describes the timing of binding source updates.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum UpdateSourceTrigger
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration UpdateSourceTrigger
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type UpdateSourceTrigger
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/UpdateSourceTrigger.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Default</td>
<td>0</td>
<td>The default UpdateSourceTrigger value of the binding target property. This currently defaults to PropertyChanged.</td>
</tr>
<tr>
<td>PropertyChanged</td>
<td>1</td>
<td>Updates the binding source immediately whenever the binding target property changes.</td>
</tr>
<tr>
<td>LostFocus</td>
<td>2</td>
<td>Updates the binding source whenever the binding target element loses focus.</td>
</tr>
<tr>
<td>Explicit</td>
<td>3</td>
<td>Updates the binding source only when you call the UpdateSource() method.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

