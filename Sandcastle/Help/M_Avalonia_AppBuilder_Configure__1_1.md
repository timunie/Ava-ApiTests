---
title:Configure&lt;TApp&gt;(Func&lt;TApp&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Configure&lt;TApp&gt;(Func&lt;TApp&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public static AppBuilder Configure<TApp>(
	Func<TApp> appFactory
)
where TApp : Application

```
**VB**
``` VB
Public Shared Function Configure(Of TApp As Application) ( 
	appFactory As Func(Of TApp)
) As AppBuilder
```
**F#**
``` F#
static member Configure : 
        appFactory : Func<'TApp> -> AppBuilder  when 'TApp : Application
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(TApp)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="Overload_Avalonia_AppBuilder_Configure">Configure Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
