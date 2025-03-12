# TryGet(LogEventLevel, String, ParametrizedLogger) Method


Returns parametrized logging sink if given log level is enabled.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryGet(
	LogEventLevel level,
	string area,
	out ParametrizedLogger outLogger
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryGet ( 
	level As LogEventLevel,
	area As String,
	<OutAttribute> ByRef outLogger As ParametrizedLogger
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryGet : 
        level : LogEventLevel * 
        area : string * 
        outLogger : ParametrizedLogger byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/Logger.cs#L49" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Logging_LogEventLevel">LogEventLevel</a></dt><dd>The log event level.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The area that the event originates from.</dd><dt>  <a href="T_Avalonia_Logging_ParametrizedLogger">ParametrizedLogger</a></dt><dd>Log sink that is valid only if method returns true.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if logger was obtained successfully.

## See Also


#### Reference
<a href="T_Avalonia_Logging_Logger">Logger Class</a>  
<a href="Overload_Avalonia_Logging_Logger_TryGet">TryGet Overload</a>  
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  

