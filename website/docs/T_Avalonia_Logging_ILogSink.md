# ILogSink Interface


Defines a sink for Avalonia logging messages.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ILogSink
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ILogSink
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ILogSink = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/ILogSink.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Logging_ILogSink_IsEnabled">IsEnabled(LogEventLevel, String)</a></td>
<td>Checks if given log level and area is enabled.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ILogSink_Log_1">Log(LogEventLevel, String, Object, String)</a></td>
<td>Logs an event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ILogSink_Log">Log(LogEventLevel, String, Object, String, Object[])</a></td>
<td>Logs a new event.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  

