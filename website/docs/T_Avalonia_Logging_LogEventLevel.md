# LogEventLevel Enumeration


Specifies the meaning and relative importance of a log event.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum LogEventLevel
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration LogEventLevel
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type LogEventLevel
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/LogEventLevel.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Verbose</td>
<td>0</td>
<td>Anything and everything you might want to know about a running block of code.</td>
</tr>
<tr>
<td>Debug</td>
<td>1</td>
<td>Internal system events that aren't necessarily observable from the outside.</td>
</tr>
<tr>
<td>Information</td>
<td>2</td>
<td>The lifeblood of operational intelligence - things happen.</td>
</tr>
<tr>
<td>Warning</td>
<td>3</td>
<td>Service is degraded or endangered.</td>
</tr>
<tr>
<td>Error</td>
<td>4</td>
<td>Functionality is unavailable, invariants are broken or data is lost.</td>
</tr>
<tr>
<td>Fatal</td>
<td>5</td>
<td>If you have a pager, it goes off when one of these occurs.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  

