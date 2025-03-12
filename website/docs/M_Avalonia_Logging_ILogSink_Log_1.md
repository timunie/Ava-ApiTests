# Log(LogEventLevel, String, Object, String) Method


Logs an event.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Log(
	LogEventLevel level,
	string area,
	Object? source,
	string messageTemplate
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Log ( 
	level As LogEventLevel,
	area As String,
	source As Object,
	messageTemplate As String
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Log : 
        level : LogEventLevel * 
        area : string * 
        source : Object * 
        messageTemplate : string -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/ILogSink.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Logging_LogEventLevel">LogEventLevel</a></dt><dd>The log event level.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The area that the event originates.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object from which the event originates.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The message template.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Logging_ILogSink">ILogSink Interface</a>  
<a href="Overload_Avalonia_Logging_ILogSink_Log">Log Overload</a>  
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  

