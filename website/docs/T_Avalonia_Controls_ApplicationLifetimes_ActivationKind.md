# ActivationKind Enumeration




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum ActivationKind
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration ActivationKind
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ActivationKind
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ActivationKind.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>File</td>
<td>10</td>
<td>When the application is passed a file to open.</td>
</tr>
<tr>
<td>OpenUri</td>
<td>20</td>
<td>When the application is passed a URI to open, protocol activation.</td>
</tr>
<tr>
<td>Reopen</td>
<td>30</td>
<td>When the application is asked to reopen. An example of this is on MacOS when all the windows are closed, application continues to run in the background and the user clicks the application's dock icon.</td>
</tr>
<tr>
<td>Background</td>
<td>40</td>
<td>When the application enters or leaves a background state. An example is when on MacOS the user hides or shows and application (not window), or when a browser application switchs tabs or when a mobile applications goes into the background.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

