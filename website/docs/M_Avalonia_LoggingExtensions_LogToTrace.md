import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# LogToTrace Method


Logs Avalonia events to the <a href="https://learn.microsoft.com/dotnet/api/system.diagnostics.trace" target="_blank" rel="noopener noreferrer">Trace</a> sink.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AppBuilder LogToTrace(
	this AppBuilder builder,
	LogEventLevel level = LogEventLevel.Warning,
	params string[] areas
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function LogToTrace ( 
	builder As AppBuilder,
	Optional level As LogEventLevel = LogEventLevel.Warning,
	ParamArray areas As String()
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member LogToTrace : 
        builder : AppBuilder * 
        ?level : LogEventLevel * 
        areas : string[] 
(* Defaults:
        let _level = defaultArg level LogEventLevel.Warning
*)
-> AppBuilder 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd>The app builder instance.</dd><dt>  LogEventLevel  (Optional)</dt><dd>The minimum level to log.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd>The areas to log. Valid values are listed in LogArea.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
The app builder instance.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_LoggingExtensions">LoggingExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
