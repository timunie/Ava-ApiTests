# IsEnabled Method


Checks if given log level and area is enabled.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool IsEnabled(
	LogEventLevel level,
	string area
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function IsEnabled ( 
	level As LogEventLevel,
	area As String
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IsEnabled : 
        level : LogEventLevel * 
        area : string -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/ILogSink.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Logging_LogEventLevel">LogEventLevel</a></dt><dd>The log event level.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The log area.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if given log level is enabled.

## See Also


#### Reference
<a href="T_Avalonia_Logging_ILogSink">ILogSink Interface</a>  
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  

