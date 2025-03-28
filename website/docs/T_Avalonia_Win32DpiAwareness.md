# Win32DpiAwareness Enumeration


Represents the DPI Awareness for the application.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum Win32DpiAwareness
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration Win32DpiAwareness
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Win32DpiAwareness
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>Unaware</td>
<td>0</td>
<td>The application is DPI unaware.</td>
</tr>
<tr>
<td>SystemDpiAware</td>
<td>1</td>
<td>The application is system DPI aware. It will query DPI once and will not adjust to new DPI changes</td>
</tr>
<tr>
<td>PerMonitorDpiAware</td>
<td>2</td>
<td>The application is per-monitor DPI aware. It adjust its scale factor whenever DPI changes.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

