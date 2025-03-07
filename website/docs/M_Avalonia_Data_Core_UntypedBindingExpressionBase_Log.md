# Log(AvaloniaObject, String, LogEventLevel) Method


Logs a binding error.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected void Log(
	AvaloniaObject target,
	string error,
	LogEventLevel level = LogEventLevel.Warning
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub Log ( 
	target As AvaloniaObject,
	error As String,
	Optional level As LogEventLevel = LogEventLevel.Warning
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Log : 
        target : AvaloniaObject * 
        error : string * 
        ?level : LogEventLevel 
(* Defaults:
        let _level = defaultArg level LogEventLevel.Warning
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/UntypedBindingExpressionBase.cs#L393" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The target of the binding expression.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The error message.</dd><dt>  <a href="T_Avalonia_Logging_LogEventLevel">LogEventLevel</a>  (Optional)</dt><dd>The log level.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase Class</a>  
<a href="Overload_Avalonia_Data_Core_UntypedBindingExpressionBase_Log">Log Overload</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
