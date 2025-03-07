# Logger Class


Logs avalonia messages.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class Logger
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class Logger
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type Logger = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/Logger.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Logger</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Logging_Logger_Sink">Sink</a></td>
<td>Gets or sets the application-defined sink that receives the messages.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Logging_Logger_IsEnabled">IsEnabled(LogEventLevel, String)</a></td>
<td>Checks if given log level is enabled.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_Logger_TryGet_1">TryGet(LogEventLevel, String)</a></td>
<td>Returns parametrized logging sink if given log level is enabled.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_Logger_TryGet">TryGet(LogEventLevel, String, ParametrizedLogger)</a></td>
<td>Returns parametrized logging sink if given log level is enabled.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  
