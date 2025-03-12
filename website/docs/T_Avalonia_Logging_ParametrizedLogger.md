# ParametrizedLogger Structure


Logger sink parametrized for given logging level.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public readonly struct ParametrizedLogger : IEquatable<ParametrizedLogger>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Structure ParametrizedLogger
	Implements IEquatable(Of ParametrizedLogger)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ParametrizedLogger = 
    struct
        inherit ValueType
        interface IEquatable<ParametrizedLogger>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/ParametrizedLogger.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.valuetype" target="_blank" rel="noopener noreferrer">ValueType</a>  →  ParametrizedLogger</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(ParametrizedLogger)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger__ctor">ParametrizedLogger(ILogSink, LogEventLevel, String)</a></td>
<td>Initializes a new instance of the ParametrizedLogger class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Logging_ParametrizedLogger_IsValid">IsValid</a></td>
<td>Checks if this logger can be used.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger_Log">Log(Object, String)</a></td>
<td>Logs an event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger_Log__1">Log(T0)(Object, String, T0)</a></td>
<td>Logs an event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger_Log__2">Log(T0, T1)(Object, String, T0, T1)</a></td>
<td>Logs an event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger_Log__3">Log(T0, T1, T2)(Object, String, T0, T1, T2)</a></td>
<td>Logs an event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger_Log__4">Log(T0, T1, T2, T3)(Object, String, T0, T1, T2, T3)</a></td>
<td>Logs an event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger_Log__5">Log(T0, T1, T2, T3, T4)(Object, String, T0, T1, T2, T3, T4)</a></td>
<td>Logs an event.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Logging_ParametrizedLogger_Log__6">Log(T0, T1, T2, T3, T4, T5)(Object, String, T0, T1, T2, T3, T4, T5)</a></td>
<td>Logs an event.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  

