# Log&lt;T0, T1, T2&gt;(Object, String, T0, T1, T2) Method


Logs an event.



## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Log<T0, T1, T2>(
	Object? source,
	string messageTemplate,
	T0 propertyValue0,
	T1 propertyValue1,
	T2 propertyValue2
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Log(Of T0, T1, T2) ( 
	source As Object,
	messageTemplate As String,
	propertyValue0 As T0,
	propertyValue1 As T1,
	propertyValue2 As T2
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Log : 
        source : Object * 
        messageTemplate : string * 
        propertyValue0 : 'T0 * 
        propertyValue1 : 'T1 * 
        propertyValue2 : 'T2 -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Logging/ParametrizedLogger.cs#L86" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object from which the event originates.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The message template.</dd><dt>  T0</dt><dd>Message property value.</dd><dt>  T1</dt><dd>Message property value.</dd><dt>  T2</dt><dd>Message property value.</dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Logging_ParametrizedLogger">ParametrizedLogger Structure</a>  
<a href="Overload_Avalonia_Logging_ParametrizedLogger_Log">Log Overload</a>  
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  
