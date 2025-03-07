# BindingMode Enumeration


Defines possible binding modes.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum BindingMode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration BindingMode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type BindingMode
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingMode.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Default</td>
<td>0</td>
<td>Uses the default binding mode specified for the property.</td>
</tr>
<tr>
<td>OneWay</td>
<td>1</td>
<td>Binds one way from source to target.</td>
</tr>
<tr>
<td>TwoWay</td>
<td>2</td>
<td>Binds two-way with the initial value coming from the target.</td>
</tr>
<tr>
<td>OneTime</td>
<td>3</td>
<td>Updates the target when the application starts or when the data context changes.</td>
</tr>
<tr>
<td>OneWayToSource</td>
<td>4</td>
<td>Binds one way from target to source.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
